<table key={'table'+index} className='border-collapse w-full border border-solid border-gray-300'>
                <tbody>   
                    <tr key={'tr'+index} className={'py-2 bg-'+ (index % 2 ? 'green': 'red') + '-100'}>
                        {items.names.map((item, ind) => 
                        <>
                            <td key={'col'+ind} className='text-center px-2 py-3'>{item.id}</td>
                            <td key={'col'+ind} className='px-2 py-3'>{name.type}</td>
                            <td key={'col'+ind} className='px-2 py-3'>{name.description}</td>
                        </>                    
                        )}
                    </tr>            
                </tbody>
            </table>


const itemList = [{
    id:'fruits', type: 'fruits', description: 'Fruits Name',
    names: ['apple', 'banana', 'mango', 'Mulberry']
}, {
    id:'misc', type: 'misc', description: 'Miscellaneous',
    names: ['magic', 'disco', 'movie']
}, {
    id:'birds', type: 'birds', description: 'Birds Name',
    names: ['pigeon', 'parrot', 'duck']
}]


console.log('%c'+ itemFilter[1], 'color: SpringGreen')  
// console.log('%c'+ 'Tomato : ' + itemType, 'color: Tomato')  
// console.log('%c'+ 'SlateBlue : ' + itemType, 'color: SlateBlue')  
// console.log('%c'+ 'Violet : ' + itemType, 'color: Violet')  
// console.log('%c'+ 'Aquamarine : ' + itemType, 'color: AquaMarine')  
// console.log('%c'+ 'GreenYellow : ' + itemType, 'color: GreenYellow')  
// console.log('%c'+ 'Magenta : ' + itemType, 'color: Magenta') 


function ListFilter({className, items, heading, color='purple'}){
    const items = [
        {id:0, type: 'fruits', name: 'apple', description: 'winter'},
        {id:1, type: 'fruits', name: 'banana', description: 'all'}, 
        {id:2, type: 'fruits', name: 'mango', description: 'summer'}, 
        {id:3, type: 'fruits', name: 'Mulberry', description: 'rainy'},
        {id:4, type: 'misc', name: 'magic', description: 'moments'},
        {id:5, type: 'misc', name: 'disco', description: 'dancer'}, 
        {id:6, type: 'misc', name: 'movie', description: 'Johny'},
        {id:7, type: 'birds', name: 'pigeon', description: 'nest'},
        {id:8, type: 'birds', name: 'parrot', description: 'cage'}, 
        {id:9, type: 'birds', name: 'duck', description: 'water'}
    ]
    return(
        <table className='border-collapse border border-solid border-gray-300'>
            {items.map((item, index) => (
                <tr>
                    <>
                        <td>{item.id+1}</td>
                        <td>{item.type}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                    </>                    
                </tr>
            ))}
        </table>
    )
    console.log('%c'+ items, 'color: forestGreenLight')    
}