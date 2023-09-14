import { IConeType } from "../models/ConeTypes";

export const getQueryKeyPoints = (clientData: IConeType) => ["PointsFetch", clientData];

export const HEIGHT = 'heightCone';
export const RADIUS = 'raduisCone';
export const SEGMENTS = 'numberSegmentsCone';