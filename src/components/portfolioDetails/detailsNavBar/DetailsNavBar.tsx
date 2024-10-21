import './detailsNavBar.css';
import DetailsNavBarButton from '../../shared/detailsNavBarButton/DetailsNavBarButton';
import portfolioData from '../../shared/portfolioData/portfolioData';
import { useEffect, useState } from 'react';

interface DetailsNavBarProps {
    projectIndex: number;
    displayProject:(projectIndex:number)=>void
}

interface projectTitlesInterf {
    previous: number;
    next: number;
}

const DetailsNavBar: React.FC<DetailsNavBarProps> = ({ projectIndex,displayProject }) => {
    const [projectNavigation, setProjectNavigation] = useState<projectTitlesInterf>({ previous: 0, next: 2 });
    const { previous, next } = projectNavigation;

    useEffect(() => {
        if (projectIndex == 0) {
            console.log('menos');
        } else if (projectIndex == portfolioData.length) {
            console.log('mas');
        } else {
            setProjectNavigation({ previous: (projectIndex - 1), next: (projectIndex + 1) });
        }
    }, [projectIndex])

    return (
        <nav id="detailsNavBar">
            <DetailsNavBarButton direction='left' projectTitle={portfolioData[previous].title}/>
            <div id="detailsNavBarSeparator"></div>
            <DetailsNavBarButton direction='right' projectTitle={portfolioData[next].title} />
        </nav>
    )
}
export default DetailsNavBar;