function UserProfile() {
    const profiles = [
        {
            name: "Quincy Larson",
            bio: "A car salesman during the weekday, and a bouncer for the late night raves on the weekends.",
            profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Monrovia Clarke", 
            bio: "Nurse by day, and a graffiti artist by night, bringing color to the urban landscape.",
            profileImage: "https://randomuser.me/api/portraits/women/23.jpg",
        },
        {
            name: "Ezekiel Holt",
            bio: "Gym trainer and youth soccer coach, helping both adults and children stay active",
            profileImage: "https://randomuser.me/api/portraits/men/14.jpg",
        },
    ];

    return (
        <div style={{display: "flex", gap: "20px", justifyContent: "center"}}>
            {profiles.map((person, index) => (
                <div
                    key={index}
                    style={{
                        maxWidth: "300px",
                        padding: "24px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        textAlign: "center",
                        backgroundColor: "#fff",
                    }}
                >
                    <img
                     src={person.profileImage}
                     alt={`${person.name}'s profile`}
                     style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        objectFit: "cover",
                     }}
                    />
                    <h2 style={{marginTop: "12px", color: "#222"}}>{person.name}</h2>
                    <p style={{color: "#555"}}>{person.bio}</p>
                </div>
            ))}
        </div>
    );
}

export default UserProfile;