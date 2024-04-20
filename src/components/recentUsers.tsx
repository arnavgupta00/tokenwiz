import imageLogo from "@/components/images/logo-light-sm.png";
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";
import { getAllUsersName } from "@/serverActions/actions";
import { use } from "react";

export default async function RecentUsers() {
  const userNames = await getAllUsersName();

  const listColors = ["bg-primary", "bg-secondary", "bg-info", "bg-success", "bg-warning", "bg-danger"]

  function getInitials(str: string) {
    const words = str.split(" ");
    let initials = "";
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      const initial = words[i].charAt(0).toUpperCase();

      initials += initial;

      count++;

      if (count === 2) {
        break;
      }
    }
    return initials;
  }

  return (
    <div className="w-full p-0 m-0" >
      <div className="card card-full-height shadow-md	" style={{minHeight:"300px"}}>
        <div className="card-innr">
          <div className="card-head has-aside pb-0">
            <h4 className="card-title">Recent Users</h4>
          </div>
          <table className="data-table user-list">
            <tbody>
              {userNames.map((user) => {
                return (
                  <tr className="data-item">
                    <td className="data-col dt-user">
                      <div className="user-block">
                        <div className={`user-photo ${listColors[Math.floor(Math.random() * listColors.length)]}`}>{getInitials(user.name)}</div>
                        <div className="user-info">
                          <span className="lead user-name">{user.name}</span>
                          <span className="sub user-id">{new Date().getFullYear()}-{user.id}</span>
                        </div>
                      </div>
                    </td>
                    <td className="data-col dt-join text-right">
                      <span className="sub join-time">{user.createdAt.toLocaleDateString()}</span>
                    </td>
                  </tr>
                );
              })}

              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
