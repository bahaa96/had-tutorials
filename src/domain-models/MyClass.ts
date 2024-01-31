import { User } from "./User";

export interface MyClass {
	id: string;
	level: 'beginner' | 'intermedite' | 'advanced';
	teacher: User;
	status: 'live' | 'recorded';
	subject: string;
	participants: { total: number, available: number };
	description: string;
	dueTime: number;
}