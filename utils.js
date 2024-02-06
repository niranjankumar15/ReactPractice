// generates random RGB color
function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
}

function Clock({ time }){
    const setNewDate = () => {
        const d = new Date()
        let hours = d.toLocaleTimeString()
        return hours
    }
    React.useEffect(() => {
        window.setInterval(setNewDate, 1000)
    })
    return (
        <h1>
            { setNewDate() }
        </h1>
    )
}    

function Tick(className) {
    const [date, setDate] = React.useState(new Date());        
    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    return (
        <>
        <span className={className.className}>{date.toLocaleTimeString()}</span>
        </>
    )
}


function Copyright({text='Copyright '}){
    return(
        `${text}` + String.fromCodePoint(0x00A9) +  new Date().getFullYear()
        + ' All rights reserved.'        
    )   
}

function Container ({className='', style, type, size, ...rest}){
    const props = {}
    return (
    <> 
        <div 
            className={`${type}-container ${className} ${size ?' w-auto ':'container mx-auto '}`}
            style={{width: `${size ? '100%' : ''}`, ...style }}
            {...rest}
         />
    </>
)}


function SearchBox({label, color, handleEvent}){
    return(
        <form action='#'>
            <label htmlFor='searchInput' className={'font-semibold mr-3 text-lg text-'+ color +'-800'}>{label} :</label>
            <input id='searchInput' type='text' 
                className={'px-2 border border-solid border-'+color+'-300 rounded-lg leading-normal h-12'} 
                onChange = {handleEvent} />        
        </form>
    )
}


function Iterator({listObj, ...rest}){
    const ele = rest.tagName ? rest.tagName : 'span'
    return(
        <>
            {listObj.map((item, i) => (
                React.createElement(ele, {
                    'data-key': rest.keyName+'Col'+i,
                    key: rest.keyName+'Col'+i,
                    className: (i % 2 ? ' bg-'+ rest.bgEven : ' ' + rest.bgOdd) + ' ' + rest.className
                }, (rest.prefix ? rest.prefix : '') + item)
            ))}
        </>
    )
}

function NavPills({objList, label, ...rest}){
    const [ItemType, setItemType] = React.useState('fruits')
    // const handleClick = (item) => ()
    return( 
        objList.map((item, i) => (
        <button key={rest.keyName+'A'+i}  
            className={'px-4 mr-4 btn-'+rest.themeColor+' capitalize'} 
            onClick={() => {
                setItemType(item[rest.filterBy])
                console.log('%c' + ItemType, 'color: pink')
                }}>
            {item[label]}
        </button>
    )))
}

function ItemPriceRange({obj, range}){
    const itemValue = (range === 'min' ? Math.min(...obj.prices) : Math.max(...obj.prices))
    const indx = (obj.prices).indexOf(itemValue.toString())

    return(
        <span>
            {'The ' + (range === 'min' ? 'Cheapest' : 'Costiliest' ) + ' item from the store is' }
            <b className='capitalize'> {obj.names[indx]}</b> which is sold at 
            <b> <i>₹{itemValue}</i></b> / <span className='lowercase'>{obj.units[indx]}</span>
        </span>
    )
    // console.log(itemValue)
    //use below for large / small list of objects
    // The JavaScriptCore engine has a hard-coded argument limit of 65536
    
    //const val = Math.min.apply(null, obj.prices);
    // console.log(val)        
    // const itemName = obj.names[indx]
}
