import React, { useEffect, useContext, useState } from 'react';

export const Data = () => {

    const [recentCertificates] = useState([
        { owner: "Wong Tai Man", userAddress: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2", state: "Active", deployTime: "2024-01-01", certificateName: "Graduation Certificate" },
        { owner: "Chan Tai Man", userAddress: "", state: "Inactive", deployTime: "2024-01-01", certificateName: "Graduation Certificate" },
        { owner: "Wong Tai Man", userAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", state: "Active", deployTime: "2024-01-01", certificateName: "Graduation Certificate" },
        { owner: "Chan Tai Man", userAddress: "", state: "Inactive", deployTime: "2024-01-01", certificateName: "Graduation Certificate" },
        { owner: "Wong Tai Man", userAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e", state: "Active", deployTime: "2024-01-01", certificateName: "Graduation Certificate" },
        { owner: "Wong Tai Man", userAddress: "0x1281B0Fa3b844Bc454e4438f44e12828e676c326", state: "Active", deployTime: "2024-01-01", certificateName: "Graduation Certificate" },
        { owner: "Wong Tai Man", userAddress: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326", state: "Active", deployTime: "2024-01-01", certificateName: "Graduation Certificate" }
    ]);

    var [recentVer] = useState([
        { owner: "Wong Tai Man", userAddress: "hislnmdns342hoehip", orgName:"UCLA",disableTime:"09:00:23 5-3-2025" ,certificateName: "Graduation Certificate" },
        { owner: "Chan Tai Man", userAddress: "hislnmdns342hoehip", orgName:"HKCU",disableTime:"09:00:23 5-3-2025" ,certificateName: "Graduation Certificate"  },
        { owner: "Wong Tai Man", userAddress: "hislnmdns86ihoehip", orgName: "NYU",disableTime:"09:00:23 5-3-2025" ,certificateName: "Graduation Certificate" },
    ])
    const user ={owner:"HKMU",userAddress:"0x742d35Cc6634C0532925a3b844Bc454e4438f44e"}

    var [search] = useState([
        { owner: "Wong Tai Man", userAddress: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",deployTime:"09:00:23 5-3-2025" ,certificateName: "Graduation Certificate" }
      ]);
    const stat = { activenum: 142, inactivenum: 20 };
    return { recentCertificates, recentVer, user, stat,search};
}

export default Data;