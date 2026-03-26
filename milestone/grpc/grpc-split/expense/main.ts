import { Balance } from "./balance.js";
import { Expense } from "./expenses.js";
import { Group } from "./Group.js";
import { Split } from "./splitEnum.js";
import { User } from "./User.js";

class Main {
  static groupIdCounter = 0;
  groups: Map<number, Group>;

  constructor() {
    this.groups = new Map();
  }

  addGroup(groupName: string, createdBy: User) {
    Main.groupIdCounter++;
    let group = new Group(Main.groupIdCounter, groupName, createdBy);
    this.groups.set(Main.groupIdCounter, group);
  }

  addGroupMembers(userID: number, groupID: number, username: string) {
    let group = this.groups.get(groupID);
    if (group == undefined) {
      return;
    } else {
      if (group) {
        group.addGroupMembers(userID, username);
      } else {
        return "Group not found";
      }
    }
  }

  addExpenses(
    paidByID: number,
    amount: number,
    name: string,
    groupID: number,
    splitType: Split,
  ) {
    let expense = new Expense(
      Main.groupIdCounter,
      paidByID,
      amount,
      name,
      splitType,
    );

    if (this.groups.get(groupID) == undefined) {
      return "Invalid Group ID";
    }
    let group = this.groups.get(groupID);
    if (group) {
      group.addExpenses(paidByID, expense);
    } else {
      return "Group not found";
    }
  }

  getExpenses(groupId: number, userId: number) {
    let group = this.groups.get(groupId);
    if (!group) {
      return "GroupID not found";
    }
    let expenses = group.expensess.get(userId);
    console.log();
    if (!expenses) {
      return "user dosen't have expemse in this id";
    }
    return expenses;
  }

  addParticipant(
    adminId: number,
    userID: number,
    balance: Balance,
    groupID: number,
  ) {
    let expense = this.getExpenses(groupID, adminId);
    if (expense instanceof Expense) {
      expense.addParticipant(userID, balance);
    }
  }

  getGroupDetails(groupId: number,expenseId:number) {
    let result=[];
    let group = this.groups.get(groupId);
    if (group) {
      let details = group.getAllDetails();
      let expenses = details.expensess.get(expenseId);
      if(expenses){
        let participants = expenses.participants
        if(participants){
            for(let [k,v] of participants){
                let obj = {
                    groupID : v.groupID,
                    expenseId : v.expensesID,
                    result:`userID ${v.balance.fromUser} need to give ${v.balance.amount} to userId ${v.balance.toUser} `
                }   
                result.push(obj);
            }
            return result;
        }
      }
    } else {
      return "group not found";
    }
  }

  splitBalance(
    userId: number,
    groupId: number,
    customSplitAmount: { [key: string]: number },
  ) {
    let expenses = this.getExpenses(groupId, userId);
    if (expenses instanceof Expense) {
      expenses.splitBalances(customSplitAmount);
    } else {
      return "cant find expense in this id";
    }
  }

  updateBalance(userId: number, amount: number, groupID: number) {
    let expense = this.getExpenses(groupID, userId);
    if (expense instanceof Expense) {
      expense.updateBalances(userId, amount);
    } else {
      return "cant find expense in this id";
    }
  }

}

const main = new Main();

main.addGroup("Lunch", new User(1, "testUser"));
main.addGroupMembers(1, 1, "testuser2");
main.addGroupMembers(2, 1, "testuser3");
main.addGroupMembers(3, 1, "testuser4");

// main.addExpenses(1, 100, "testExpense", 1, Split.EQUALSPLIT);
main.addExpenses(1, 100, "testExpense", 1, Split.CUSTOMSPLIT);
// main.addExpenses(1, 100, "testExpense", 1, Split.PRECENTAGESPLIT);

main.addParticipant(1, 1, new Balance(1, 1, 1, 1), 1);
main.addParticipant(1, 2, new Balance(2, 1, 1, 1), 1);
main.addParticipant(1, 3, new Balance(3, 1, 1, 1), 1);
main.splitBalance(1, 1, { 1: 50, 2: 25, 3: 25 });
console.log(main.getGroupDetails(1,1));
// main.getExpensesTest(1,1);
