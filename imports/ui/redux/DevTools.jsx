import React from 'react';
import { createDevTools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
    // Monitors are individually adjustable with props.
    // Consult their repositories to learn about those props.
    // Here, we put LogMonitor inside a DockMonitor.
    // Docs: https://github.com/gaearon/redux-devtools-dock-monitor
    <DockMonitor
        toggleVisibilityKey='ctrl-q'
        changePositionKey='ctrl-i'
        defaultIsVisible={false}
    >
        <LogMonitor theme='tomorrow' />
    </DockMonitor>
);

export default DevTools;