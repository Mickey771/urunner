import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setSelectedevent } from "../../redux/reducers/adminSlice";

export const useEventCarousel = (events: Events[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  const goToNextEvent = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === events.length - 1 ? 0 : prevIndex + 1;
      dispatch(setSelectedevent(events[newIndex]._id));
      return newIndex;
    });
  }, [events, dispatch]);

  const goToPrevEvent = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? events.length - 1 : prevIndex - 1;
      dispatch(setSelectedevent(events[newIndex]._id));
      return newIndex;
    });
  }, [events, dispatch]);

  const currentEvent = events[currentIndex];

  return { currentEvent, goToNextEvent, goToPrevEvent, setCurrentIndex };
};
