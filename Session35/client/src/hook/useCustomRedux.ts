import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch,RootState } from "../store";

//Custom hook thay vi su dung useDispatch va useSelector
export const useAppDispatch=useDispatch.withTypes<AppDispatch>()
export const useAppSelector=useSelector.withTypes<RootState>()