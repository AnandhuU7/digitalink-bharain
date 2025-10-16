import React from 'react';

interface JourneyItem {
  day: number;
  status: 'completed' | 'inprogress' | 'upcoming';
  metadata: {
    title: string;
    subtitle: string;
  };
}

const JOURNEY_DATA: JourneyItem[] = [
  {
    day: 0,
    status: "completed",
    metadata: {
      title: "Getting to know you",
      subtitle: "Completed on 04/23/2024"
    }
  },
  {
    day: 1,
    status: "completed",
    metadata: {
      title: "4 tasks completed",
      subtitle: "Completed on 04/23/2024"
    }
  },
  {
    day: 2,
    status: "completed",
    metadata: {
      title: "3 tasks completed",
      subtitle: "Completed on 04/23/2024"
    }
  },
  {
    day: 3,
    status: "completed",
    metadata: {
      title: "4 tasks completed",
      subtitle: "Completed on 04/23/2024"
    }
  },
  {
    day: 4,
    status: "completed",
    metadata: {
      title: "3 tasks completed",
      subtitle: "Completed on 04/23/2024"
    }
  },
  {
    day: 5,
    status: "inprogress",
    metadata: {
      title: "4 tasks completed",
      subtitle: "In Progress"
    }
  },
  {
    day: 6,
    status: "upcoming",
    metadata: {
      title: "Not Started Yet",
      subtitle: ""
    }
  },
  {
    day: 7,
    status: "upcoming",
    metadata: {
      title: "Not Started Yet",
      subtitle: ""
    }
  },
  {
    day: 8,
    status: "upcoming",
    metadata: {
      title: "Not Started Yet",
      subtitle: ""
    }
  },
  {
    day: 9,
    status: "upcoming",
    metadata: {
      title: "Not Started Yet",
      subtitle: ""
    }
  },
  {
    day: 10,
    status: "upcoming",
    metadata: {
      title: "Not Started Yet",
      subtitle: ""
    }
  }
];

const TimelinePath: React.FC<{
  isTop?: boolean;
  startingPath?: boolean;
  stroke: string;
  width?: string;
}> = ({ isTop = false, startingPath = false, stroke, width = '100%' }) => {
  if (startingPath) {
    return (
      <svg width="176" height="79" viewBox="0 0 176 79" fill="none" style={{ display: 'block', width: '176px', height: '79px' }}>
        <path
          d="M170 0.5V7.13078C170 23.8428 156.344 37.333 139.633 37.1285L36.8669 35.8715C20.1562 35.667 6.5 49.1572 6.5 65.8692V79"
          stroke={stroke}
          strokeWidth="12"
        />
      </svg>
    );
  }

  if (isTop) {
    return (
      <svg width={width} height="87" viewBox="0 0 327 87" fill="none" preserveAspectRatio="none" style={{ display: 'block' }}>
        <path
          d="M321 0.5V8.5C321 25.0685 307.569 38.5 291 38.5H36C19.4315 38.5 6 51.9315 6 68.5V86.5"
          stroke={stroke}
          strokeWidth="12"
        />
      </svg>
    );
  }

  return (
    <svg width={width} height="86" viewBox="0 0 325 86" fill="none" preserveAspectRatio="none" style={{ display: 'block' }}>
      <path
        d="M6 0.5V11.0925C6 27.0726 18.9273 40.0413 34.9073 40.0924L290.093 40.9076C306.073 40.9587 319 53.9274 319 69.9075V86"
        stroke={stroke}
        strokeWidth="12"
      />
    </svg>
  );
};

const JourneyTimeline: React.FC = () => {
  const getPathColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#81C784';
      case 'inprogress':
        return '#81C784';
      case 'upcoming':
        return '#E0E0E0';
      default:
        return '#E0E0E0';
    }
  };

  const getDayBorderColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#81C784';
      case 'inprogress':
        return '#2196F3';
      case 'upcoming':
        return '#BDBDBD';
      default:
        return '#BDBDBD';
    }
  };

  const getDayBgColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#66BB6A';
      case 'inprogress':
        return '#2196F3';
      case 'upcoming':
        return '#9E9E9E';
      default:
        return '#9E9E9E';
    }
  };

  const getCardBgColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#66BB6A';
      case 'inprogress':
        return '#FF9800';
      case 'upcoming':
        return '#9E9E9E';
      default:
        return '#9E9E9E';
    }
  };

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '600px', 
      margin: '0 auto', 
      backgroundColor: '#F5F5F5',
      minHeight: '100vh',
      padding: '30px 20px',
      overflow: 'auto'
    }}>
      <div style={{ width: '100%', maxWidth: '520px', margin: '0 auto', position: 'relative' }}>
        {JOURNEY_DATA.map((item, index) => (
          <div key={`timeline-${index}`} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Path connecting from previous item */}
            {index > 0 && (
              <div style={{ 
                width: '100%', 
                marginTop: '-12px',
                position: 'relative',
                zIndex: 1
              }}>
                {index % 2 === 0 ? (
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', paddingRight: '75px' }}>
                    <TimelinePath isTop={false} stroke={getPathColor(JOURNEY_DATA[index - 1].status)} width="310px" />
                  </div>
                ) : (
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', paddingLeft: '75px' }}>
                    <TimelinePath isTop={true} stroke={getPathColor(JOURNEY_DATA[index - 1].status)} width="310px" />
                  </div>
                )}
              </div>
            )}

            {/* Card and Day Badge Row */}
            <div style={{ 
              width: '100%',
              display: 'flex',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'center',
              gap: '15px',
              marginTop: index === 0 ? '0' : '-24px',
              position: 'relative',
              zIndex: 10
            }}>
              {/* Day Badge */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `5px solid ${getDayBorderColor(item.status)}`,
                flexShrink: 0,
                zIndex: 20
              }}>
                {item.day === 0 ? (
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#E0E0E0'
                  }}></div>
                ) : (
                  <div style={{
                    borderRadius: '50%',
                    padding: '6px 8px',
                    backgroundColor: getDayBgColor(item.status)
                  }}>
                    <span style={{ 
                      color: 'white', 
                      fontWeight: '800', 
                      fontSize: '18px',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      lineHeight: '1'
                    }}>
                      {item.day.toString().padStart(2, '0')}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Card */}
              <button style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: '20px',
                paddingRight: '16px',
                paddingTop: '18px',
                paddingBottom: '18px',
                borderRadius: '16px',
                backgroundColor: getCardBgColor(item.status),
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                maxWidth: '420px',
                zIndex: 20
              }}>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <p style={{ 
                    color: 'white', 
                    fontWeight: '700', 
                    fontSize: '17px', 
                    margin: 0,
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    lineHeight: '1.3'
                  }}>
                    {item.metadata.title}
                  </p>
                  {item.metadata.subtitle && (
                    <p style={{ 
                      color: 'white', 
                      fontSize: '14px', 
                      fontWeight: '600', 
                      margin: '4px 0 0 0',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      lineHeight: '1.3',
                      opacity: 0.95
                    }}>
                      {item.metadata.subtitle}
                    </p>
                  )}
                </div>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginLeft: '12px' }}>
                  <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.3"/>
                  <path d="M10 8l4 4-4 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Final ending path */}
            {index === JOURNEY_DATA.length - 1 && (
              <div style={{ 
                width: '100%', 
                display: 'flex', 
                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                marginTop: '-12px',
                paddingLeft: index % 2 === 0 ? '75px' : '0',
                paddingRight: index % 2 === 0 ? '0' : '75px'
              }}>
                <TimelinePath startingPath={true} stroke={getPathColor(item.status)} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ paddingBottom: '40px' }}></div>
    </div>
  );
};

export default JourneyTimeline;