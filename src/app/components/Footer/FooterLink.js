
import style from './FooterLink.module.css';

export default function FooterLink({data, dict}) {
    const filteredData = data?.filter(item => item?.menu_type === 'links');
    const filteredDataContact = data?.filter(item => item?.menu_type === 'contact');

  return (
    <div>
        <div className={`row ${style.footerLinks}`}>
            <div className="col-lg-6">
                <h5>{dict?.footer?.['web-links']}</h5>
                <ul>
                    {filteredData?.map((item, index) => (
                        <li key={index}><a href={item?.redirect || '#'} target='_blank'>{item?.name || 'Untitled'}</a></li>
                    ))}
                </ul>
            </div>
            <div className="col-lg-6">
                <h5 className='uppercase'>{dict?.footer?.['contact']}</h5>
                 <ul>
                    {filteredDataContact?.map((item, index) => (
                        <li key={index}><a href={item?.redirect || '#'} target='_blank'>{item?.name || 'Untitled'}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
