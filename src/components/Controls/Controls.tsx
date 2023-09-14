import { OrbitControls} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { FC, useRef } from "react";
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

export const Controls: FC = () => {
    const orbitRef = useRef<OrbitControlsImpl>(null);
    const {camera, gl} = useThree();

    useFrame(() => {
        orbitRef.current?.update();
    });

    return (
        <OrbitControls
            autoRotate
            args={[camera, gl.domElement]}
            ref={orbitRef}
        />
    );
}