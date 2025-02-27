import React from "react"
import classNames from "classnames";

const Breadcrumb = (props) => {
    const breadcrumbClasses = classNames('sl-breadcrumb', {
        'custom-separator': props.separator && !props.bcType,
        'triangle': props.bcType === 'triangle',
        'sl-multi-steps': ['multiStep', 'dot'].indexOf(props.bcType) !== -1,
        'text-top': props.bcType === 'dot',
        'text-center': props.bcType === 'multiStep',
        'badge': props.hasBadge
    });

    return (
        <nav>
            <ol className={breadcrumbClasses}>
            {React.Children.map(props.children, (child, index) =>
                React.isValidElement(child) ? React.cloneElement(
                    child, 
                    {
                        ...(index < React.Children.count(props.children) - 1 && !props.bcType && { 'data-separator': props.separator || ''}),
                        className: `${child.props.className || ''} ${
                            ['multiStep', 'dot'].includes(props.bcType) && 
                            index < React.Children.toArray(props.children).findIndex((el) => el.props.className?.includes('active'))
                              ? 'visited'
                              : ''
                          }`.trim()
                    }
                ) : child
            )}
            </ol>
        </nav>
    )
}

Breadcrumb.defaultProps = {
    hasBadge: false
}

export default Breadcrumb;