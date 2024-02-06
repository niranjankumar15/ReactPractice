
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

function ShowName({className, actionText, resetText}){
//const ShowName = ({className, actionText, resetText}) => {
    //
    //const [name, setName] = React.useState('')
    const getUserName = () => {
        return 'test'
    }

    // updating state directly
    //const [name, setName] = React.useState(getUserName())
    
    // updating state via function
    const [name, setName] = React.useState(getUserName())

    // updating state from input change
    const handleChange = event => {
        setName(event.target.value)
    }
    return (
        <>
        {/* {<div {...rest} />} */}
        <h1 className='mb-3 text-2xl'>
            <div className='font-semibold mb-3'>Registration</div>
            {name ? <span className='text-purple-700'>Welcome <strong className='text-purple-900'>{name}</strong> to Xebia!</span> : ' ' + name}
        </h1>
        <label htmlFor='nameInput' className='font-semibold mr-3 text-lg'>Name: </label>
        <input id='nameInput' type='text' className='px-2 border rounded-lg leading-normal h-12' onChange={handleChange} />
        <div className='mt-4'>
            {/* Setting state on click event */}
            <button className={className?className+' btn-primary':className+' '} type='button' onClick={event => setName('Disco')}>{actionText}</button>
            <button className={className?className+' ml-4 btn-cancel':className+' '} type='button' onClick={event => setName('')}>{resetText}</button>
        </div>
        </>
    )
}
function Header({className, size, children, timeContent}){
    return (
    <>
    <header className={className} width={size}>
        <>
        <div className="flex justify-between col-span-8 gap-6">
            <div className="logo"> 
                {children = children ? children : 'Company Name'}
            </div>
            <div className='time-content self-center'>
                {Tick()}
            </div>
        </div>
        </>
    </header>
    </>
)}

function Footer({className='', style, size, ...rest}){    
    const props = {}
    return (
    <>
        <div 
            className={`footer ${className} ${size}`}
            style={{width: '100%', ...style }}
            {...rest}
        >
        </div>
    </>
    )
}

function Hello(){
    const [name, setName] = 
    React.useState(
        () => window.localStorage.getItem('name') || ''
    )

    React.useEffect(() => {
        window.localStorage.setItem('name', name)
    })

    const handleClick = event => setName('Xebian')
    const resetClick = event => setName('')
    return (
        <>
            <div className='text-2xl'>
                <p className='mb-4'>
                    <span>Hello</span> 
                    <span>
                    {name ? <strong> {name} </strong> : ' World'}
                    </span>
                </p>
            </div>
            <button 
                className="btn-primary"
                onClick={handleClick}
            >Click Me</button>
            <button 
                className="btn-cancel ml-4"
                onClick={resetClick}
            >Reset</button>
        </>
    )
}

function ListFilter({className, items, heading, color='purple', ...rest}){    
    const getItemType = () => {
        return 'birds'
    }
    // const [itemType, setItemType] = React.useState()
    // const updateType = (text) => {
    //     setItemType(text)
    // }
    const [itemType, setItemType] = React.useState(getItemType())
    // console.log(itemType)

    // updating state from input change
    const updateType = event => {
        const evtValue =  event.target.value ? event.target.value : getItemType()
        setItemType(evtValue)
    }
    const itemList = [{
        id:'fruits', type: 'fruits', description: 'Fruits Name',
        name: 'apple'
    }, {
        id:'misc', type: 'misc', description: 'Miscellaneous',
        name: 'movie'
    }, {
        id:'birds', type: 'birds', description: 'Birds Name',
        name: 'duck'
    }]
    
    const itemFilter = itemList.filter(item => {
        item.id === itemType
        // console.log('%c'+ item.id + ' - '+ itemType, 'color: GreenYellow')
    })
    
    console.log('%c'+ itemFilter[1], 'color: SpringGreen')  
    // console.log('%c'+ 'Tomato : ' + itemType, 'color: Tomato')  
    // console.log('%c'+ 'SlateBlue : ' + itemType, 'color: SlateBlue')  
    // console.log('%c'+ 'Violet : ' + itemType, 'color: Violet')  
    // console.log('%c'+ 'Aquamarine : ' + itemType, 'color: AquaMarine')  
    // console.log('%c'+ 'GreenYellow : ' + itemType, 'color: GreenYellow')  
    // console.log('%c'+ 'Magenta : ' + itemType, 'color: Magenta')  
    return(
        <>
        <div {...rest}></div>
        <form action='#'>
            <label htmlFor='nameInput' className='font-semibold mr-3 text-lg'>Name: </label>
            <input id='nameInput' type='text' 
                className='px-2 border rounded-lg leading-normal h-12' 
                onChange = {updateType} />        
        </form>
        
        {itemFilter.map((items, index) => (
            <div>
                {console.log(items)}
                <h2 key={'h2'+index} className='text-4xl'>{items.type}</h2>                
            </div>
        ))}
        </>
    )  
}

function List({className, items, heading, color='purple'}){
    //const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
    const fruits = [{name: 'apple', description: 'winter'},{name: 'banana', description: 'all'}, {name: 'mango', description: 'summer'}, {name: 'Mulberry', description: 'rainy'}]
    const misc = [{name: 'magic', description: 'moments'},{name: 'disco', description: 'dancer'}, {name: 'movie', description: 'Johny'}]
    const birds = [{name: 'pigeon', description: 'nest'},{name: 'parrot', description: 'cage'}, {name: 'duck', description: 'water'}]
    let names
    items === 'birds' ? names = birds : items === 'fruits' ? names = fruits : names = misc 
    
    // refined code
    // const names = items === 'birds' ? birds : items === 'fruits' ? fruits : misc
    // console.log(names)
    const classNames = 'text-2xl font-semibold text-' + color + '-800'
    return(
        <div className={className}>
            {heading ? <h3 className={classNames}>{heading}</h3> : heading}
            <ul>
                {names.map(
                    (item, index) => (   
                        <Item key={'listitem'+Math.random()} item={item} heading={heading} index={index+1} />
                    )
                )}
            </ul>
        </div>
    )
}
function Item({item, heading, index}){
    // console.log('%c'+ index + ' ' + heading, 'color: yellow ')
    return (
    <li className='list-item capitalize' key={heading+'list'+ index}>
        {heading==='Fruits' ? <span className='text-purple-700'>✔ </span> : index + '. ' }<b>{item.name}</b> - <i>{item.description}</i>
    </li>
    )
}

function ShowList({text, type}){
    return(
        <div>
            {/* self invoking function */}
            {(() => {
                switch(type){
                case 'fruits':
                    return <List className='align-self-start' items='fruits' heading='Fruits' />
                case 'misc':
                    return <List className='align-self-end' items='misc' heading='Misc' />    
                case 'birds':
                    return <List className='align-self-start' items='birds' heading='Birds' />
                default:
                    return null
                }
            })()}
        </div>
    )
}