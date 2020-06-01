import React from 'react';

const ZooGuardContext = React.createContext();

const ZooGuardProvider = ZooGuardContext.Provider;
const ZooGuardConsumer = ZooGuardContext.Consumer;

export {ZooGuardProvider, ZooGuardConsumer};
export default ZooGuardContext;