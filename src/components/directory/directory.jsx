import React from 'react'
import MenuItem from '../menu-item/menu-item'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { connect } from 'react-redux'
import { DirectoryStyle } from './directory.styles'

const Directory = ({ sections }) => (
  <DirectoryStyle>
    {
      sections.map(({ id, ...otherSectionProps }) => (<MenuItem
        key={id}
        {...otherSectionProps} />))
    }
  </DirectoryStyle>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory) 