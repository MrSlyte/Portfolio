angular.module("portfolio", ["ngRoute"]);
angular.module("portfolio").controller("portfolioCtrl", function ($scope) {
    $scope.sections = [
        {nome: "linguagens", section: "Linguagens", content: [
                {nome: "PHP", porcentagem: 80},
                {nome: "C#", porcentagem: 70},
                {nome: "JAVA", porcentagem: 40},
                {nome: "HTML", porcentagem: 70},
                {nome: "CSS", porcentagem: 60},
                {nome: "SQL", porcentagem: 80}
            ]},
        {nome: "bancoDados", section: "Banco de Dados", content: [
                {nome: "MySQL", porcentagem: 95},
                {nome: "Oracle", porcentagem: 60},
                {nome: "Pusher", porcentagem: 40},
                {nome: "SQLite", porcentagem: 50}
            ]},
        {nome: "habilidades", section: "Habilidades", content: [
                {nome: "Capacidade de ensinar", porcentagem: 80},
                {nome: "Capacidade de aprender rapidamente", porcentagem: 80},
                {nome: "Pró-atividade", porcentagem: 100},
                {nome: "Paixão pela área de TI", porcentagem: 100},
                {nome: "Capacidade de trabalhar sob pressão", porcentagem: 80},
                {nome: "Capacidade de inovar", porcentagem: 70}
            ]}
    ];
});