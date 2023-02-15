import './app-info.css';

const AppInfo = ({employees, increased}) => {
    return (
            <div className="app-info">
                <h1>Record of employees of <span className="lemon">Lemon</span> company</h1>
                <h2>Total number of employees: <span className="number-color">{employees}</span></h2>
                <h2><span className="number-color">{increased}</span> employees will receive the award</h2>
            </div>
        );
}

export default AppInfo;