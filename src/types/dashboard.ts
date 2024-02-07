import { ReactElement } from "react";

let myVariable: number | string | boolean;

export interface DummyData {
    items?: string;
    for?: string;
    icon?: ReactElement; 
  };
export interface StatCardProps  {
    data: DummyData;
  };
export interface DummyTableData {
    ORGANIZATIONNAME?: string;
    VEHICLETYPE?: string;
    STARTEDAT?: string; 
    PICKUPLOCATION?: string; 
    DESTINATIONLOCATION?: string; 
    STATUSData?: string; 
    STATUSVALUE?:'pending' | 'cancelled' | 'completed';
  };
