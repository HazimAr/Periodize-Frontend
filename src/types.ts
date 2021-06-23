type Lifts = {
	name: string;
	load: string;
	sets: string;
	reps: string;
	rest: string;
	note: string;
	hideNote: boolean;
	unit: string;
};
type Workouts = {
	workoutName: string;
	workoutNote: string;
	hideNote: boolean;
	type: string;
	rest: string;
	lifts: Lifts[];
};
type Days = {
	dayName: string;
	dayDescription: string;
	hideNote: boolean;
	workouts: Workouts[];
};
type MyFormValues = {
	title: string;
	description: string;
	// preset: string | null;
	days: Days[];
};

export type { MyFormValues, Days, Workouts, Lifts };
