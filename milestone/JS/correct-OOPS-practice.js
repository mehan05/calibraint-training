class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
    }

    borrow() {
        if (!this.isAvailable) throw new Error("Book already borrowed");
        this.isAvailable = false;
    }

    return() {
        if (this.isAvailable) throw new Error("Book already in library");
        this.isAvailable = true;
    }
}

class User {
    static MAX_BOOKS = 3;

    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.loans = [];
    }

    canBorrow() {
        return this.loans.length < User.MAX_BOOKS;
    }

    addLoan(loan) {
        if (!this.canBorrow()) throw new Error("Borrow limit reached");
        this.loans.push(loan);
    }

    closeLoan(loanId) {
        this.loans = this.loans.filter(l => l.id !== loanId);
    }
}

class Loan {
    constructor(id, book, user, dueDate, amount) {
        this.id = id;
        this.book = book;
        this.user = user;
        this.dueDate = dueDate;
        this.amount = amount;
        this.status = "ACTIVE"; // ACTIVE | CLOSED
    }

    pay() {
        this.amount = 0;
    }

    close() {
        if (this.amount > 0) throw new Error("Dues pending");
        this.status = "CLOSED";
    }
}

class Library {
    constructor() {
        this.books = [];
        this.users = [];
        this.loans = [];
        this.loanCounter = 1;
    }

    // ---------- FINDERS ----------
    findBook(id) {
        const book = this.books.find(b => b.id === id);
        if (!book) throw new Error("Book not found");
        return book;
    }

    findUser(id) {
        const user = this.users.find(u => u.id === id);
        if (!user) throw new Error("User not found");
        return user;
    }

    findLoan(id) {
        const loan = this.loans.find(l => l.id === id);
        if (!loan) throw new Error("Loan not found");
        return loan;
    }

    // ---------- ADD ----------
    addBook(id, title, author, year) {
        this.books.push(new Book(id, title, author, year));
    }

    addUser(id, name) {
        this.users.push(new User(id, name));
    }

    // ---------- OPERATIONS ----------
    borrowBook(bookId, userId) {
        const book = this.findBook(bookId);
        const user = this.findUser(userId);

        if (!user.canBorrow()) throw new Error("User borrow limit reached");
        if (!book.isAvailable) throw new Error("Book unavailable");

        book.borrow();

        const loan = new Loan(
            this.loanCounter++,
            book,
            user,
            Date.now() + 7 * 24 * 60 * 60 * 1000,
            100
        );

        user.addLoan(loan);
        this.loans.push(loan);

        return loan.id;
    }

    returnBook(loanId) {
        const loan = this.findLoan(loanId);

        loan.pay();
        loan.close();

        loan.book.return();
        loan.user.closeLoan(loan.id);
    }
}

// Example Usage
const lib = new Library();
lib.addUser(1, "Mehan");
lib.addBook(101, "Clean Code", "Robert C. Martin", 2008);

const loanId = lib.borrowBook(101, 1);
lib.returnBook(loanId);