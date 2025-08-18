type User = {
  id: number;
  name: string;
  email: string;
  age?: number;
};

type UserUpdates = Partial<Pick<User, "name" | "email" | "age">>;

function updateUser(user: User, updates: UserUpdates): User | string {
  if ("id" in updates) {
    return "Id cannot be changed";
  }

  return {
    ...user,
    ...updates,
  };
}
const user1: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const updates1 = {
  name: "Alice Johnson",
};

console.log(updateUser(user1, updates1));

const user2: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const updates2 = {
  id: 2, 
  name: "Alice Johnson",
};

console.log(updateUser(user2, updates2));

