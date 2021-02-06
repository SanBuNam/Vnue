import PropTypes from 'prop-types';

export default function Page({ children, cool }) {
  return (
    <>
      <h2>I am the page component</h2>
      <h3>{cool}</h3>
      {children}
    </>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  // children: PropTypes.oneOf([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]),
  children: PropTypes.any,
};
