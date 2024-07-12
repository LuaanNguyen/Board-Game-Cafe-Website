/* eslint-disable react/no-unknown-property */
import { useState, useEffect, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Text, Environment, CameraControls } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils.js";
import { motion } from "framer-motion";

// Component to load and display GLTF model
const Model = () => {
  const { scene } = useGLTF("./coffee_shop/scene3.gltf"); // Adjust the path as needed
  return <primitive object={scene} />;
};

const Menu = () => {
  const controls = useRef(null);
  const meshFitCameraHome = useRef(null);
  const meshFitCameraStore = useRef(null);
  const [showButton, setShowButton] = useState(true);

  // Function to handle the intro animation and camera dolly
  const intro = () => {
    setShowButton(false);
    const intervalId = setInterval(async () => {
      if (controls.current) {
        clearInterval(intervalId);
        await controls.current.dolly(-22);
        controls.current.smoothTime = 0.8;

        fitCamera();
      }
    }, 10);
  };

  // Function to fit the camera to the selected box
  const fitCamera = async () => {
    if (controls.current) {
      if (showButton) {
        controls.current.fitToBox(meshFitCameraHome.current, true);
        setShowButton(true);
      } else {
        controls.current.fitToBox(meshFitCameraStore.current, true);
      }
    }
  };

  // Handle button click to change camera view
  const handleButtonClick = () => {
    controls.current.fitToBox(meshFitCameraStore.current, true);
    setShowButton(false);
  };

  // Initial effect to start the intro sequence
  useEffect(() => {
    intro();
  }, []);

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => fitCamera();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="h-[100vh]">
        <Suspense fallback={null}>
          <Canvas className="mt-32" camera={{ fov: 90, position: [0, 0, 8] }}>
            <CameraControls ref={controls} />
            <mesh ref={meshFitCameraHome} position={[0, 1, 5]} visible={false}>
              <boxGeometry args={[7.5, 5, 2]} />
              <meshBasicMaterial color="orange" transparent opacity={0.5} />
            </mesh>

            <Text
              font={"./fonts/Poppins/Poppins-Black.ttf"}
              position={[-3.3, 0, 3]}
              rotation-y={degToRad(30)}
              anchorY={"bottom"}
              textAlign="center"
            >
              SIP & Play {"\n"}
              MENU
              <meshBasicMaterial color="#ACD793" />
            </Text>
            <Environment preset="sunset" />

            <group rotation-y={degToRad(-25)} position={[3, 0, 0]}>
              <Model></Model>

              <mesh
                ref={meshFitCameraStore}
                position-x={-2.5}
                position-y={2}
                position-z={-1}
                visible={false}
              >
                <boxGeometry args={[3, 3, 3]} />
                <meshBasicMaterial color="red" transparent opacity={0.5} />
              </mesh>
            </group>
          </Canvas>
          {showButton && (
            <motion.button
              onClick={handleButtonClick}
              className="absolute top-[85vh] left-[45%] transform bg-orangeLight text-black p-6 rounded-lg cursor-pointer w-46 text-center font-bold border-2 border-gray-700 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Enter to view the Menu
            </motion.button>
          )}
        </Suspense>
      </section>
    </>
  );
};

export default Menu;
