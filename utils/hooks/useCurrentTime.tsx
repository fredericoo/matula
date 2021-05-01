import { useState, createContext, useContext, useEffect } from "react";
import moment, { Moment } from "moment";
import React from "react";

const CurrentTimeContext = createContext<Moment>(moment());

export const CurrentTimeProvider: React.FC = (props) => {
	const [currentTime, setCurrentTime] = useState<Moment>(moment());
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(moment());
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return <CurrentTimeContext.Provider {...props} value={currentTime} />;
};

export const useCurrentTime = () => {
	return useContext(CurrentTimeContext);
};

export default useCurrentTime;
