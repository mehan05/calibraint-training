import { Expense } from "./expenses.js";
import { GroupMember } from "./groupMember.js";
import { User } from "./User.js";

export class Group {
  groupId: number;
  groupName: string;
  createdBy: User;
  groupMembers: Set<GroupMember>;
  expensess: Map<number, Expense>;

  constructor(groupId: number, groupName: string, createdBy: User) {
    this.groupId = groupId;
    this.groupName = groupName;
    this.createdBy = createdBy;
    this.groupMembers = new Set();
    this.expensess = new Map();
  }

  addExpenses(userID: number, expense: Expense) {
    this.expensess.set(userID, expense);
  }

  addGroupMembers(userId: number, username: string) {
    let user = new User(userId, username);
    let groupMember = new GroupMember(this.groupId, user.userId);
    this.groupMembers.add(groupMember);
  }

  getExpense(userId: number) {
    return this.expensess.get(userId);
  }

  getAllDetails() {
    return {
      groupId: this.groupId,
      groupName: this.groupName,
      createdBy: this.createdBy,
      groupMembers: this.groupMembers,
      expensess: this.expensess,
    };
  }
}
