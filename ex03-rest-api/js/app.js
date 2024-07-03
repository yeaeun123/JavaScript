document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "http://localhost:8080/learnbyteaching/api/todos"; // API URL
    const todoList = document.getElementById("todo-list"); // TODO list element: ul#todo-list
    const newTodoInput = document.getElementById("new-todo"); // New TODO input element: input#new-todo
    const addTodoButton = document.getElementById("add-todo"); // Add TODO button element: button#add-todo

    // Add TODO to DOM
    //  새로운 todo item을 ul#todo-list에 추가하는 함수
    function addTodoToDOM(todo) {
        //
    }

    // Fetch and display existing TODOs
    //  API로부터 todo list를 가져와서 화면에 표시하는 함수
    function fetchTodos() {
        //
    }

    // Add new TODO
    //  새로운 todo를 추가하는 이벤트 핸들러 연결
    addTodoButton.addEventListener("click", (event) => {
        //
    });

    // Delete TODO
    //  특정 todo를 삭제하는 함수 (삭제 버튼의 클릭 이벤트 핸들러로 사용됨)
    window.deleteTodo = function (id) {
        //
    };

    // Initial fetch
    fetchTodos();
});
