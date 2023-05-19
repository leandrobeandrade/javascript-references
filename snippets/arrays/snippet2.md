> Ordenar valores do tipo string

    const vals = ['E', 'C', 'A', 'D', 'B'];
    console.log(vals.sort((ant, prox) => ant.localeCompare(prox)))

> Deletar objetos pelo id

    let data = {
      "id": 1,
      "item": "Item 1",
      "children": [{
          "id": 2,
          "item": "Item 2",
          "children": []
        },
        {
          "id": 3,
          "item": "Item 3",
          "children": []
        },
        {
          "id": 4,
          "item": "Item 4",
          "children": []
        },
        {
          "id": 5,
          "item": "Item 5",
          "children": [{
              "id": 6,
              "item": "Item 6",
              "children": []
            },
            {
              "id": 7,
              "item": "Item 7",
              "children": []
            },
            {
              "id": 8,
              "item": "Item 8",
              "children": []
            },
            {
              "id": 9,
              "item": "Item 9",
              "children": []
            }
          ]
        }
      ]
    }

    function removerItem(id) {
      if (id === data.id) data = {};                                      // limpa o objeto se o id passado for o do primeiro objeto
      else {
        for (let i = 0; i < data.children.length; i++) {                  // percorre os arrays de primeiro nível (children do primeiro objeto)
          if (data.children[i].id === id) data.children.splice(i, 1);     // verifica se o id passado está dentro dos arrays do primeiro nível, se sim remove o objeto
          else if (data.children[i].children.length > 0) {                // senão verifica quais arrays do segundo nível possui objetos
            for (let j = 0; j < data.children[i].children.length; j++) {  // percorre os arrays do segundo nível
              if (data.children[i].children[j].id === id)                 // verifica se o id passado está dentro dos arrays do segundo nível, se sim remove o objeto
                data.children[i].children.splice(j, 1);
            }
          }
        }
      }
      console.log(data);
    }

    removerItem(6);
