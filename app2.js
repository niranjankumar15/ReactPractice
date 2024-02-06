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


function ListFilter({className, items, heading, themeColor='purple', ...rest}){    
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
    const handleChange = event => {
        // const evtValue =  event.target.value ? event.target.value : getItemType()
        setItemType(event.target.value)
    }
    
    
    const itemFilter = itemListAll.filter(item => {
        return item.type === itemType
    })

    // Not working
    const showHeading = () => {
        if(itemFilter){
            return(
                <>
                <h2 key={'h2'+itemType} className={'text-4xl capitalize text-' + themeColor + '-800'}>{itemType}</h2>
                <table key={'table'+itemType} className='border-collapse w-full border border-solid border-gray-300'>
                    <tbody> 
                        {listItems}
                    </tbody>
                </table>
                </>
            )
        }
    }

    // console.log(itemFilter);
    const listItems = itemFilter.map((item, ind) => (
        <tr key={'tr'+ind} className={'py-2 bg-'+ (ind % 2 ? 'green': 'red') + '-100'}>
            {/* {item.names.map((item, ind) =>  */}
            <>
                <td key={'col1'+ind} className='text-center px-2 py-3'>{item.id}</td>
                <td key={'col2'+ind} className='px-2 py-3'>{item.type}</td>
                <td key={'col3'+ind} className='px-2 py-3'>{item.name}</td>
                <td key={'col4'+ind} className='px-2 py-3'>{item.description}</td>
            </>                    
            {/* )} */}
        </tr>            
    )
    )
    
    // console.log('%c'+ itemType, 'color: AquaMarine')  
    return(
        <>
            <div {...rest}></div>
            <SearchBox label='Search Data' color={themeColor} handleEvent={handleChange} />
            
            <>
                <h2 key={'h2'+itemType} className={'text-4xl capitalize text-' + themeColor + '-800'}>{itemType}</h2>
                <table key={'table'+itemType} className='border-collapse w-full border border-solid border-gray-300'>
                    <tbody> 
                        {listItems}
                    </tbody>
                </table>
            </>
        
        </>
    )  
}

function ListFilterDeep({className, items, heading, themeColor='purple', ...rest}){ 
    const keyName = 'ListFilterDeep'    
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
    const handleClick = event => {
        // const evtValue =  event.target.value ? event.target.value : getItemType()
        setItemType(event.target.value)
    }
    
    
    const itemFilter = itemList.filter(item => {
        return item.id === itemType
    })

    // console.log(itemFilter);
    const listItems = itemFilter.map((obj, index) => (
        <div key={keyName+'Div'+index}>
            <h2 className='mb-2 text-xl capitalize'>
                <b className='font-semiBold'>{obj.type}</b>
                <span className='italic text-lg capitalize'> - List of {obj.description}</span>
            </h2>
            <table key={(keyName+'Table'+obj.id+index).toString()} className='border-collapse w-full border border-solid border-gray-300'>
                <tbody> 
                    <tr>
                        <Iterator listObj={obj.names} tagName='td' keyName={keyName} 
                        className={'capitalize text-center px-2 py-3 border border-solid border-'+ (index % 2 ? 'green': 'red') + '-400 bg-' + (index % 2 ? 'green': 'red') + '-200'} />
                    </tr>  
                </tbody>
            </table>
        </div>                    
    ))
    
    // console.log('%c'+ itemType, 'color: AquaMarine')  
    return(
        <>
            <div {...rest}></div>
            <SearchBox label='Search Category' color={themeColor} handleEvent={handleClick} />
            <>{listItems}</>
        </>
    )  
}


function List({className, items, heading, color='purple'}){
    //const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
    const fruits = [{name: 'apple', description: 'winter'},{name: 'banana', description: 'all'}, {name: 'mango', description: 'summer'}, {name: 'Mulberry', description: 'rainy'}]
    const misc = [{name: 'magic', description: 'moments'},{name: 'disco', description: 'dancer'}, {name: 'movie', description: 'Johny'}]
    const birds = [{name: 'pigeon', description: 'nest'},{name: 'parrot', description: 'cage'}, {name: 'duck', description: 'water'}]
    let names
    
    //nesting of IFs
    items === 'birds' ? names = birds : items === 'fruits' ? names = fruits : names = misc 
    
    // refined code
    // const names = items === 'birds' ? birds : items === 'fruits' ? fruits : misc
    // console.log(names)
    const classNames = 'text-2xl font-semibold text-' + color + '-800'
    return(
        <>
            <div className={className}>
                {heading ? <h3 className={classNames}>{heading}</h3> : heading}
                <ul>
                    {names.map(
                        (item, index) => (   
                            <ListItem key={'listitem'+Math.random()} item={item} heading={heading} index={index+1} color={color} />
                        )
                    )}
                </ul>
            </div>
        

        </>
    )
}
function ListItem({item, heading, index, color}){
    // console.log('%c'+ index + ' ' + heading, 'color: yellow ')
    return (
        <li className={'list-item capitalize text-' + color + '-800'} key={heading+'list'+ index}>
            {heading==='Fruits' 
            ? <span className='text-purple-700'>✔ </span> 
            : index + '. ' }
            <b>{item.name}</b> - <i>{item.description}</i>
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
                    return (
                        <List className='align-self-start' items='fruits' heading='Fruits' />
                    )
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
        
function MartItemList({items, heading, themeColor='purple', ...rest}){    
    const keyName='MartItemList'
    const filterBy='label'
    const getItemType = () => {
        return items
    }
    // const [itemType, setItemType] = React.useState()
    // const updateType = (text) => {
    //     setItemType(text)
    // }
    const [itemType, setItemType] = React.useState(getItemType())
    //console.log(itemType)

    // updating state from input change
    const handleClick = event => {
        // const evtValue =  event.target.value ? event.target.value : getItemType()
        setItemType(event.target.value)
    }
    
    
    const itemFilter = martList.filter(item => {
        return item[filterBy] === itemType
    })

    // console.log(itemFilter, 'color: pink')
    const anchorListDistinct = [...new Set(martList.map(item => item[filterBy]))];
    // console.log(martList)
    console.log(anchorListDistinct)
    
    // <NavPills objList={martList} themeColor={themeColor} label="category" filterBy={filterBy} />
    
    
    const anchorList = martList.map((item, i) => (
        <button key={keyName+'A'+i}  
            className={'px-4 btn-'+themeColor+' capitalize'} 
            onClick={() => setItemType(item[filterBy])}>
            {item.category}
        </button>
    ))
    
    
    const anchorListNew = anchorListDistinct.map((item, i) => (
        <button 
            key={keyName+'A2'+i} 
            className='px-4 btn-secondary capitalize'
            onClick={() => setItemType(item)}>
            {item}
        </button>
    ))
    

    const listItems = itemFilter.map((obj, index) => (
    <div key={keyName+'Div'+ index}>
        <div>
            {/* Below code throws error as NaN for oj.prices since its not a List
            {Math.max(obj.prices)} */}
            <div className={'p-4 rounded-lg mb-4 border border-solid border-' + 'red' +'-300 bg-'+ 'red' +'-100'} >
                <ItemPriceRange obj={obj} range='max' />
            </div>
            <div className={'p-4 rounded-lg mb-4 border border-solid border-' + 'green' +'-300 bg-'+ 'green' +'-100'} >
                <ItemPriceRange obj={obj} range='min' />
                {/* { ItemPriceRange(obj, 'min') } */}
            </div>
        </div>
        <div className='mb-3'>
            <h2 className={'mb-2 text-xl capitalize text-'+(index % 2===0 ? 'red' : 'blue')+'-800'}>
                    <b className='font-semiBold'>{obj.label}</b>
                    <span className='italic text-lg capitalize'> - List of {obj.description}</span>
            </h2>
            <table className='border-collapse w-full border border-solid border-gray-300'>
                <thead>
                    <tr>
                        <th className={'table-th border-r-s border-solid border-'+themeColor+'-500'}>Item</th>
                        <th className={'table-th border-l border-r border-solid border-'+themeColor+'-500'}>Price</th>
                        <th className={'table-th border-l border-solid border-'+themeColor+'-500'}>Unit</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr className={'py-2 bg-'+ (index % 2 ? 'green': 'red') + '-100 border border-solid border-'+ (index % 2 ? 'green': 'red') + '-200'}>
                        <td>
                            <Iterator 
                                listObj={obj.names} keyName={keyName+'ColItem1'+index} 
                                className='block capitalize text-left px-4 py-3 '
                                bgEven='blue-200' bgOdd='green-200'
                            />
                        </td>                                
                        <td>
                            <Iterator 
                                listObj={obj.prices} keyName={keyName+'ColItem2'+index} 
                                className='block capitalize text-left px-4 py-3 '
                                bgEven='blue-200' bgOdd='green-200' prefix='₹'
                            />
                        </td>
                                
                        <td>
                            <Iterator 
                                listObj={obj.units} keyName={keyName+'ColItem3'} 
                                className='block capitalize text-left px-4 py-3 lowercase'
                                bgEven='blue-200' bgOdd='green-200'
                            />
                            {/* {obj.units.map((unit, i) => 
                                <li className={'px-4 py-3 bg-'+ (i % 2 ? 'red': 'blue') + '-200'} 
                                    key={keyName+'ColItem3'+i}>
                                    {unit}
                                </li>
                            )} */}
                        </td>                        
                    </tr>  
                </tbody>
            </table>
        </div>
    </div>                    
    ))
    
    console.log('%c'+ itemType, 'color: AquaMarine')  
    return(
        <>
            <div {...rest}></div>
            <SearchBox label='Search Item Type' color={themeColor} handleClick={handleClick} />
    
            <div className='bg-purple-100 rounded-lg p-4 flex justify-between mb-4'>
                {anchorList}
            </div>
            <div className='bg-green-100 rounded-lg p-4 flex justify-between mb-4'>
                {anchorListNew}
            </div>
            <div className='bg-indigo-100 rounded-lg p-4 flex justify-between mb-4'>
                <NavPills objList={anchorListDistinct} themeColor={themeColor} label="category" filterBy={filterBy} />
            </div>
            <>{listItems}</>
        </>
    )  
}