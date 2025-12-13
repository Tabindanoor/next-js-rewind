type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export default async function Page() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/", {
    // by default available noneed to activate
    // isg incremental static generation i another type
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    const users: User[] = await res.json();

    return (
      <main style={{ padding: "2rem" }}>
        <h1>Users List</h1>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "8px",
            }}
          >
            <h2>{user.name} ({user.username})</h2>
            <p>
              <strong>Email:</strong> {user.email} <br />
              <strong>Phone:</strong> {user.phone} <br />
              <strong>Website:</strong> {user.website}
            </p>
            <p>
              <strong>Address:</strong> {user.address.street}, {user.address.suite},{" "}
              {user.address.city}, {user.address.zipcode} <br />
              <strong>Geo:</strong> Lat {user.address.geo.lat}, Lng {user.address.geo.lng}
            </p>
            <p>
              <strong>Company:</strong> {user.company.name} <br />
              <strong>CatchPhrase:</strong> {user.company.catchPhrase} <br />
              <strong>BS:</strong> {user.company.bs}
            </p>
          </div>
        ))}
      </main>
    );
  } catch (error) {
    return <p style={{ color: "red" }}>Error fetching users: {(error as Error).message}</p>;
  }
}
