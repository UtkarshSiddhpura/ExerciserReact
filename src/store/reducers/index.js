import { combineReducers } from "redux";
import exercises from "./exercises";
import exercise_counter from "./exercise_counter";
import isHost from "./presence/isHost";
import isShared from "./presence/isShared";
import sharedExercises from "./presence/sharedExercises";
import users from "./presence/users";
import sharedAllExercises from "./presence/shareAll";
import current_user from "./current_user";
import run_all from "./run_all";
import run_all_exercise from "./run_all_exercise_index";
import evaluationMode from "./evaluation_mode";
import evaluation_exercise from "./evaluation_exercise";

const rootReducer = combineReducers({
	exercises,
	exercise_counter,
	isHost: isHost,
	isShared: isShared,
	shared_exercises: sharedExercises,
	users: users,
	current_user: current_user,
	isRunAll: run_all,
	exerciseRunning: run_all_exercise,
	shared_all_exercises: sharedAllExercises,
	evaluation_mode: evaluationMode,
	evaluation_exercise: evaluation_exercise,
});

export default rootReducer;
