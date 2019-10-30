import React from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../redux/list/actions.list';

class List extends React.Component {
  componentDidMount() {
    this.props.fetchList();
  }

  renderList() {
    const { list } = this.props;

    if (list === null) {
      return <div className="ui active loader"></div>;
    }

    return (
      <div style={{ margin: '10px 50px' }} className="list-container">
        <div className="ui inverted segment">
          <div className="ui inverted relaxed divided list">
            {list.map(item => (
              <div
                style={{ display: 'flex', justifyContent: 'center' }}
                className="item"
                key={item.id}
              >
                <div className="content">
                  <div className="header">
                    آدرس:<span> </span>
                    {item.address === null ? (
                      <i className="home icon"></i>
                    ) : (
                      item.address
                    )}
                  </div>
                  <span>{item.floorMaterialType.name}&#9734;</span>
                  <span>
                    {item.heatingSystemType === null ? (
                      <i className="phone icon"></i>
                    ) : (
                      item.heatingSystemType.name
                    )}
                  </span>
                  <span>
                    &#9734;
                    {item.airConditioningSystemType === null ? (
                      <i className="phone icon"></i>
                    ) : (
                      item.airConditioningSystemType.name
                    )}
                  </span>
                  <span>
                    &#9734;
                    {item.residenceStatusType === null ? (
                      <i className="phone icon"></i>
                    ) : (
                      item.residenceStatusType.name
                    )}
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingRight: '20px'
                  }}
                >
                  <span>
                    متراژ:<span> </span>
                    {item.area === null || item.area === 0 ? (
                      <i className="phone icon"></i>
                    ) : (
                      item.area
                    )}
                  </span>
                  <span>
                    &#9734; ودیعه:<span> </span>
                    {item.preRent === null || item.preRent === 0 ? (
                      <i className="phone icon"></i>
                    ) : (
                      item.preRent
                    )}
                  </span>
                  <span>
                    &#9734; اجاره:<span> </span>
                    {item.rent === null || item.rent === 0 ? (
                      <i className="phone icon"></i>
                    ) : (
                      item.rent
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { list: state.list.currentList };
};

export default connect(
  mapStateToProps,
  { fetchList }
)(List);
