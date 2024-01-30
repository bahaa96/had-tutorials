export interface User {
	id: string;
	role: 'teacher' | 'student' | 'moderator'
	name: string;
}