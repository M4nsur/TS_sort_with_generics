const data = [
    {id: 2, name: "Олег"},
    {id: 1, name: "Петр"},
    {id: 3, name: "Аашок"},
]

interface qwe {
    id: number
}

// <T extends qwe> - дженерик T наследует интерфейс qwe, т.е T теперь должен быть объектом: {id: number}
// param: T[] - первый параметр/аргумент функции должен быть массивом состоящий из объекта/ов: {id: number}
// type: "cba" | "abc" = "abc" - второй параметр/аргумент функции типизирован с помощью тайпа,
//он должен быть либо строкой "abc", либо строкой "bca", "=abc" - означет, что по умолчанию он равен "abc"

const sorted = <T extends qwe>(param: T[], type: "cba" | "abc" = "abc"): T[] => {
    return param.sort((a, b) => {  
        if(type === "cba") {
            return a.id - b.id
        }
        
        else  {
            return b.id - a.id
        }
    })
}

console.log(sorted(data))
