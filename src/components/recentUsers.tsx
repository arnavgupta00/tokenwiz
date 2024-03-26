
import imageLogo from "@/components/images/logo-light-sm.png";
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";


export default function RecentUsers() {
 return <div className="col-lg-6">
 <div className="card card-full-height shadow-md	">
     <div className="card-innr">
         <div className="card-head has-aside pb-0">
             <h4 className="card-title">Recent Users</h4>
         </div>
         <table className="data-table user-list">
             <tbody>
                 <tr className="data-item">
                     <td className="data-col dt-user">
                         <div className="user-block">
                             <div className="user-photo">
                                 <img src={imageLogo.src} alt=""/>
                             </div>
                             <div className="user-info">
                                 <span className="lead user-name">Abu Bin Ishtiyak</span>
                                 <span className="sub user-id">UD102001</span>
                             </div>
                         </div>
                     </td>
                     <td className="data-col dt-join text-right">
                         <span className="sub join-time">03 Hours ago</span>
                     </td>
                 </tr>
                 <tr className="data-item">
                     <td className="data-col dt-user">
                         <div className="user-block">
                             <div className="user-photo">HW</div>
                             <div className="user-info">
                                 <span className="lead user-name">Helena Walz</span>
                                 <span className="sub user-id">UD102005</span>
                             </div>
                         </div>
                     </td>
                     <td className="data-col dt-join text-right">
                         <span className="sub join-time">09 Hours ago</span>
                     </td>
                 </tr>
                 <tr className="data-item">
                     <td className="data-col dt-user">
                         <div className="user-block">
                             <div className="user-photo bg-secondary">SD</div>
                             <div className="user-info">
                                 <span className="lead user-name">Sherice Digangi</span>
                                 <span className="sub user-id">UD102023</span>
                             </div>
                         </div>
                     </td>
                     <td className="data-col dt-join text-right">
                         <span className="sub join-time">11 Hours ago</span>
                     </td>
                 </tr>
                 <tr className="data-item">
                     <td className="data-col dt-user">
                        <div className="user-block">
                             <div className="user-photo bg-danger">DS</div>
                             <div className="user-info">
                                 <span className="lead user-name">Darren Square</span>
                                 <span className="sub user-id">UD102028</span>
                             </div>
                         </div>
                     </td>
                     <td className="data-col dt-join text-right">
                         <span className="sub join-time">17 Hours ago</span>
                     </td>
                 </tr>
                
                <td className="data-col dt-user">
                    <div className="user-block">
                        <div className="user-photo bg-warning">PR</div>
                        <div className="user-info">
                            <span className="lead user-name">Patrick Reader</span>
                            <span className="sub user-id">UD102037</span>
                        </div>
                    </div>
                </td>
             </tbody>
         </table>
     </div>
 </div>
</div>
}