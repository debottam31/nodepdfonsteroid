import React from 'react';
// import  styles  from './styles.css';

const  Report = (props)=>{
    return (
      <div className='reportcontainer'>
        <section className='frontpage'>
          <div className='pageheading'>
            <h3 className='headingtext'>{props.checklist.clientName}</h3>
            <h5 className='subheadingtext'>{props.checklist.checklistName}</h5>
            <p className='entrytype'>Entity Type: {props.checklist.entityType}</p>
            <p className='headingdate'>Date Printed: {props.checklist.reportPeriod}</p>
          </div>
          <table className='checklistsummary'>
            <thead>
            <tr>
              <th className= 'summaryheader'>Checklist Tailoring Summary</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className='summarydescont'>
                <table className='summarydesc'>
                <tbody>
                  <tr>
                    <th className='summarysubheader1'>Industry(ies)</th>
                    <th>Events & Transactions</th>
                    <th>New Standards Adopted</th>
                  </tr>
                  <tr>
                    <td className='summarydesccol'>
                      { props.checklist.industryList && props.checklist.industryList.map((data,i)=><div key={i}>• {data.metadata}</div>)}
                    </td>
                    <td className='summarydesccol'>
                      { props.checklist.FSList &&  props.checklist.FSList.map((data,i)=><div key={i}>• {data.metadata}</div>)}
                    </td>
                    <td className='summarydesccol'>
                      { props.checklist.earlyAdoptionList && props.checklist.earlyAdoptionList.map((data,i)=><div  className='summtext' key={i}>• {data.metadata}</div>)}
                    </td>
                  </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            </tbody>
          </table>
        </section>
        <section className='datatable'>
          <table className='treecontainer'>
            {/* <thead className='datatableHeader'>
              <tr>
                <th className='dataheader1'>Line Item(s)</th>
                <th></th>
                <th className='dataheader2'>Response</th>
              </tr>
            </thead> */}
            <tbody>
            { props.tree && props.tree.map((row, i)=><TableRow key ={i}row = {row}/>)}
            </tbody>            
          </table>

        </section>
      
      </div>
      
    );
}


const  TableRow = (props)=>(
  <tr className='tablewrapper'>
    <td className='treedata' style={{paddingLeft : `${props.row.sequence*20 +10}px`}}>
      <div className={`treedes des-${props.row.type}`}>
        {props.row.description}
      </div>
      {(props.row.referenceJson && props.row.referenceJson.length>0 ) && <div>
        <div className='ref-description'>References:</div>
        <div style={{display : 'inline-block'}}>
          {props.row.referenceJson.map((refid, i)=>{
            return (<a href={refid.referenceUrl} className='ref-deltail' key={i}>{refid.referenceId}</a>)
          })}
        </div>
      </div>}
    </td> 
    <td></td>
    <td></td>
  </tr>
)
export default Report;
