import React from 'react';
import './TechStackComponent.css';

interface TechItem {
    name: string;
    icon: string; // This will be the SVG content or icon component
    category?: string;
}

interface TechStackComponentProps {
    title: string;
    technologies: TechItem[];
    layout?: 'grid' | 'inline' | 'categorized';
}

const TechStackComponent: React.FC<TechStackComponentProps> = ({ 
    title, 
    technologies, 
    layout = 'grid' 
}) => {
    const renderTechItem = (tech: TechItem, index: number) => (
        <div 
            key={tech.name} 
            className="tech-item"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="tech-icon" dangerouslySetInnerHTML={{ __html: tech.icon }} />
            <span className="tech-name">{tech.name}</span>
        </div>
    );

    const renderInlineTechItem = (tech: TechItem, index: number, isLast: boolean) => (
        <span key={tech.name} className="inline-tech-item">
            <span 
                className="inline-tech-icon"
                dangerouslySetInnerHTML={{ __html: tech.icon }}
            />
            <span className="inline-tech-name">{tech.name}</span>
            {!isLast && <span className="tech-separator">, </span>}
        </span>
    );

    const groupByCategory = () => {
        const grouped = technologies.reduce((acc, tech) => {
            const category = tech.category || 'Other';
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(tech);
            return acc;
        }, {} as Record<string, TechItem[]>);
        return grouped;
    };

    return (
        <div className="techstack-section">
            <h3 className="text-2xl font-bold text-[#0173ef] mb-6">{title}</h3>
            
            {layout === 'grid' && (
                <div className="tech-grid">
                    {technologies.map((tech, index) => renderTechItem(tech, index))}
                </div>
            )}
            
            {layout === 'inline' && (
                <div className="tech-inline">
                    {technologies.map((tech, index) => renderTechItem(tech, index))}
                </div>
            )}
            
            {layout === 'categorized' && (
                <div className="tech-categorized-inline">
                    {Object.entries(groupByCategory()).map(([category, techs]) => (
                        <div key={category} className="tech-category-inline">
                            <span className="category-label">{category}:</span>
                            <span className="tech-items-inline">
                                {techs.map((tech, index) => 
                                    renderInlineTechItem(tech, index, index === techs.length - 1)
                                )}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TechStackComponent;
