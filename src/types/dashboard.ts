import { ReactElement } from "react";

export interface DummyData {
  items?: string;
  for?: string;
  icon?: ReactElement; 
}

export interface StatCardProps  {
  data: DummyData;
}

export interface DummyTableData {
  ORGANIZATIONNAME?: string;
  VEHICLETYPE?: string;
  STARTEDAT?: string; 
  PICKUPLOCATION?: string; 
  DESTINATIONLOCATION?: string; 
  STATUSData?: string; 
  STATUSVALUE?:'pending' | 'cancelled' | 'completed';
}
