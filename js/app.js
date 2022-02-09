let itemsEvaluaImg = document.getElementsByClassName('evalua__items__item__img--iconColor')
let itemsEvaluaImgContainer = document.getElementsByClassName('evalua__items__item__img')
let evaluaCultivo = document.getElementById('evalua__cultivo')
let evaluaCultivoBg = document.getElementById('evalua__cultivoBg')
let evaluaAlimentos = document.getElementById('evalua__alimentos')
let evaluaAlimentosBg = document.getElementById('evalua__alimentosBg')
let evaluaNoAlcoholicasBg = document.getElementById('evalua__noAlcoholicasBg')
let evaluaNoAlcoholicas = document.getElementById('evalua__noAlcoholicas')
let evaluaAlcoholicasBg = document.getElementById('evalua__alcoholicasBg')
let evaluaAlcoholicas = document.getElementById('evalua__alcoholicas')
let evaluaOtraBg = document.getElementById('evalua__otraBg')
let evaluaOtra = document.getElementById('evalua__otra')
let evaluaLiquidoBg = document.getElementById('evalua__liquidoBg')
let evaluaSolidoBg = document.getElementById('evalua__solidoBg')
let evaluaLiquido = document.getElementById('evalua__liquido')
let evaluaSolido = document.getElementById('evalua__solido')
let evaluaRegion = document.getElementById('evalua__region')
let evaluaFormButton = document.getElementById('evalua__form__button')
let seccionEvalua = document.getElementById('evalua__form')
let seccionEvaluaResult = document.getElementById('evalua-result-container')
let contenedorEvaluaResultItems = document.getElementById('evalua-result__items')


let rubro
let tipo
let region


evaluaCultivo.addEventListener('click', ()=>{
   
    for(const itemEvaluaImg of itemsEvaluaImg) { itemEvaluaImg.classList.remove("filter-white") }
    for(const itemEvaluaImgContainer of itemsEvaluaImgContainer) { itemEvaluaImgContainer.classList.remove("verdeClaro") }

    evaluaCultivo.classList.toggle('filter-white')
    evaluaCultivoBg.classList.toggle("verdeClaro")

    rubro = 'cultivo'
 
})

evaluaAlimentos.addEventListener('click', ()=>{
   

    for(const itemEvaluaImg of itemsEvaluaImg) { itemEvaluaImg.classList.remove("filter-white") }
    for(const itemEvaluaImgContainer of itemsEvaluaImgContainer) { itemEvaluaImgContainer.classList.remove("verdeClaro") }

    evaluaAlimentos.classList.toggle('filter-white')
    evaluaAlimentosBg.classList.toggle("verdeClaro")

    rubro = 'alimentos'
 
})

evaluaNoAlcoholicas.addEventListener('click', ()=>{
   

    for(const itemEvaluaImg of itemsEvaluaImg) { itemEvaluaImg.classList.remove("filter-white") }
    for(const itemEvaluaImgContainer of itemsEvaluaImgContainer) { itemEvaluaImgContainer.classList.remove("verdeClaro") }

    evaluaNoAlcoholicas.classList.toggle('filter-white')
    evaluaNoAlcoholicasBg.classList.toggle("verdeClaro")

    rubro = 'noAlcoholicas'
 
})

evaluaAlcoholicas.addEventListener('click', ()=>{
   

    for(const itemEvaluaImg of itemsEvaluaImg) { itemEvaluaImg.classList.remove("filter-white") }
    for(const itemEvaluaImgContainer of itemsEvaluaImgContainer) { itemEvaluaImgContainer.classList.remove("verdeClaro") }

    evaluaAlcoholicas.classList.toggle('filter-white')
    evaluaAlcoholicasBg.classList.toggle("verdeClaro")

    rubro = 'alcoholicas'
 
})

evaluaOtra.addEventListener('click', ()=>{
   

    for(const itemEvaluaImg of itemsEvaluaImg) { itemEvaluaImg.classList.remove("filter-white") }
    for(const itemEvaluaImgContainer of itemsEvaluaImgContainer) { itemEvaluaImgContainer.classList.remove("verdeClaro") }

    evaluaOtra.classList.toggle('filter-white')
    evaluaOtraBg.classList.toggle("verdeClaro")

    rubro = 'otra'
 
})

evaluaLiquido.addEventListener('click', ()=>{
   
    evaluaLiquidoBg.classList.add('verdeClaro')
    evaluaLiquido.classList.add('filter-white')
    evaluaSolidoBg.classList.remove("verdeClaro")
    evaluaSolido.classList.remove('filter-white')

    tipo = 'liquido'
 
})

evaluaSolido.addEventListener('click', ()=>{
   
    evaluaLiquidoBg.classList.remove('verdeClaro')
    evaluaLiquido.classList.remove('filter-white')
    evaluaSolidoBg.classList.add("verdeClaro")
    evaluaSolido.classList.add('filter-white')

    tipo = 'solido'
 
})


evaluaRegion.addEventListener('change', ()=> region = evaluaRegion.value)

evaluaFormButton.addEventListener('click', ()=>{
   
  seccionEvalua.classList.add('d-none')
  seccionEvaluaResult.classList.remove('d-none')

//   fetch('../json/empresas.json')
//         .then((respuesta) => respuesta.json())
//         .then((data) => {

//             const filtroEmpresas = data.filter( (empresa) => empresa.rubro == rubro && empresa.tipo == tipo && empresa.region == region )

//             if (filtroEmpresas == []) {
//                 contenedorEvaluaResultItems.append(`<div>Sin resultados</div>`)    
//             }

//             for (const empresa of filtroEmpresas) {

//                 contenedorEvaluaResultItems.append(`
//                 <div class="evalua-result__items__item m-5">
//                     <img src="${empresa.img}" class="mb-5 w-100" alt="...">
//                     <h5 class="text-center mt-3 text-success">${empresa.nombre}</h5>
//                     <figcaption class="figure-caption text-center m-1">${empresa.descripcion}</figcaption>
//                     <button type="button" class="btn btn-success px-5 mt-5">Recilar</button>
//                 </div>
//                 `)
//             }

//         })
 
})


  const irAtras = () => {
    seccionEvalua.classList.remove('d-none')
    seccionEvaluaResult.classList.add('d-none')
  }
