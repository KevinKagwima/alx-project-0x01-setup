import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC<UserProps[]> = ({ users }) => {
  return (
    <>
      <Header />
      {users?.map(
        (
          {
            id,
            name,
            username,
            email,
            phone,
            website,
            address,
            company,
          }: UserProps,
          key: number
        ) => (
          <UserCard
            id={id}
            name={name}
            email={email}
            username={username}
            phone={phone}
            website={website}
            address={address}
            company={company}
          />
        )
      )}
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
