//########## NOT Completed Needs improvement ##########

class Book{


    constructor(bookId,bookTitle,authorName,publishedYear){
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.authorName = authorName;
        this.publishedYear = publishedYear;
        this.availability = false;

    }
        
    getBookDetails(){
        return {
            bookID:this.bookId,
            bookTitle:this.bookTitle,
            authorName:this.authorName,
            publishedYear:this.publishedYear
        }
    }

    borrowBook(){
        this.availability = false;
    }

    returnBook(){
        this.availability = true;
    }

    getBookStatus(){
        return this.availability;
    }
}


class User{
    constructor(userId,userName){
        this.userId = userId;
        this.userName = userName;
        this.borrowedBookCount=0;
        this.borrowedBooks=[];
        this.loanId = [];
    }
    
    updateBorrowedBooks(bookId){
        this.borrowedBooks.push(bookId);
    }

    removeBorrowedBooks(bookId){
        this.borrowedBooks = this.borrowedBooks.filter(ele=> ele!=bookId);
    }
    getUserDetails(){
        return{
            userId:this.userId,
            userName:this.userName
        }
    }

    increaseBookCount(){
        if(this.borrowedBookCount<3){
            this.borrowedBookCount +=1;
            return "Maximun bookCount not reached";
        }
        return "Maximun bookCount reached";
    }

    decreaseBookCount(){
        if(this.borrowedBookCount>0){
            this.borrowedBookCount -=1;
        }
    }

    updateLoanId(id){
        this.loanId.push( id);
    }

    removeLoanId(id){
        this.loanId = this.loanId.filter(ele=> ele!=id);
    }

    getLoanId(){
        return this.loanId;
    }

    payDueAmount(amount){
        return `due amount paid ${amount}`;
    }
    

}

class Loan{
    #loanID;
    constructor(deuDate,bookID,userID, dueAmount){
        this.deuDate = deuDate;
        this.bookID = bookID;
        this.userID = userID;
        this.dueAmount = dueAmount
        this.#loanID = 0;
    }

    getLoanDetails(){
        return{
            dueDate:this.dueDate,
            bookId:this.bookID,
            userId: this.userID,
            dueAmount: this.dueAmount
        }
    }

    updateLoanId(){
        this.#loanID +=1;
    }

    getLoanId(){
        return this.#loanID;
    }


    
}

class Library{

    users = [];
    books = [];
    loans = [];

    addUsers(userId,userName){
        let user = new User(userId,userName)
        this.users.push(user)
    }

    getUserDetailsLibrary(id){
        let [user]  = this.users.filter((ele)=> ele.getUserDetails().userId=== id)
        if(user!=null || user!=undefined){
            return user;
        }
        return "User not found";
    }

    addBook(bookId,bookTitle,authorName,publishedYear){
        let  book = new Book(bookId,bookTitle,authorName,publishedYear);
        this.books.push(book);
    }

    getBookDetailsLibrary(id){
        let [book] = this.books.filter(ele=>{
            // console.log("from filter",ele.getBookDetails())
            return  ele.getBookDetails().bookID==id;
        });
        if(book!=undefined || book!=null ){
            return book;
        }
        return "Book not found";
    }

    addLoan(deuDate,bookID,userID, dueAmount){
        let loan = new Loan(deuDate,bookID,userID, dueAmount);
        loan.updateLoanId();
        this.loans.push(loan);

    }

    getLoanDetailsLibrary(id){
        let loan = this.loans.filter(ele=> ele.getLoanDetails().loanID==id);
        if(loan!=undefined || loan!=null){
            return loan;
        }
        return "Loan not found";
    }


    borrowBookLibrary(bookId, userId){
        console.log("borrow function callwed");
        let book = this.getBookDetailsLibrary(bookId);
        if(book.getBookStatus()==true){
            console.log("Book unavailable");
            return ;
        }
        let user  = this.getUserDetailsLibrary(userId)
        
        if(user.borrowedBooks.includes(bookId)==true){
            console.log("book already borrowed");
            return;
        }
        // console.log("book details",book);
        let resUser = user.increaseBookCount();
        // console.log("book count increased",resUser);
        if(resUser=="Maximun bookCount reached"){
            return "Maximun bookCount reached";
        }
        this.addLoan(Date.now()+10000,bookId,userId,100);
        user.updateLoanId(this.loans.length);
        user.updateBorrowedBooks(bookId);
        console.log("user details",user);
        // console.log("getting loan d+id",user.getLoanId());
        book.borrowBook();
        // console.log("getbook status",book.getBookStatus());
    }
    
    returnBookLibrary(bookId,userId){
        console.log("return function callwed");
        let book = this.getBookDetailsLibrary(bookId);
        let user = this.getUserDetailsLibrary(userId);
        if(book.getBookStatus()==true){
            console.log("Book is not borrowed");
            return;
        }
        if(user.borrowedBooks.includes(bookId)==false){
            console.log("Book is not borrowed by user");
            return;
        }
        let loanId = user.getLoanId();
        let loanDetails = this.getLoanDetailsLibrary(loanId);
        let res = user.payDueAmount(loanDetails.dueAmount);
        if(res== `due amount paid ${loanDetails.dueAmount}`){
            loanDetails.dueAmount = 0;
        }
        if(loanDetails.dueAmount>0){
            return "Loan not paid";
        }
        console.log(user.getUserDetails());
        // console.log("from test",book)
        user.decreaseBookCount()
        user.removeLoanId(loanId);
        user.removeBorrowedBooks(bookId);
        book.returnBook();
        console.log("getting user details",user);
        // console.log("bookstatus",book.getBookStatus());
    
    }
}

const library = new Library();

library.addUsers(1,"Mehan");
library.addBook(101,"Clean Code","Robert C. Martin",2008);
library.borrowBookLibrary(101,1);
library.borrowBookLibrary(101,1);
library.returnBookLibrary(101,1);
// library.borrowBookLibrary(101,1);

// console.log(library.getUserDetailsLibrary(1));
// console.log(library.getBookDetailsLibrary(101));
// console.log(library.getLoanDetailsLibrary(1));