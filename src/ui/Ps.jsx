import styled from "styled-components";

const P = styled.p`
  font-size: 2rem;
  font-weight: 100;
  color: darkcyan;
  margin: 40px;
`;

function Ps() {
  return (
    <div>
      <P>仍在开发中</P>
      <P>Ps:</P>
      <P>目前只写了客房，设置页</P>
    </div>
  );
}

export default Ps;
