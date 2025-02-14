import '../../css/Common.css'
import '../../css/Header.css'
const Title = [
    {name : 'About Me',routePath:'aboue_me'},
    {name : 'Skill',routePath:'skill'},
    {name : 'Project',routePath:'projects'},
    {name : 'Career',routePath:'career'},
]

function Header() {
    return (
        <>
            <div className={'BaseFrame'}>
                <div className={'HeaderFrame'}>
                    {Title.map(({name})=> {
                        return <div className={'Header--Text'} key={name}>{name}</div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Header