// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export const Controls = () => {
    const orbitRef = useRef();
    const {camera, gl} = useThree();

    useFrame(() => {
        orbitRef.current.update();
    });

    return (
        <OrbitControls
            autoRotate
            args={[camera, gl.domElement]}
            ref={orbitRef}
        />
    );
}