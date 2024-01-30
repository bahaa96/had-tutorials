import { User } from "./User";

interface MyClass {
	level: 'BEGINNER' | 'intermedite' | 'advanced',
	teacher: User,
	status: 'live' | 'recorded',
	subject: string;
	participants: { total: number, available: number },
	description: string;
	dueTime: number;
}