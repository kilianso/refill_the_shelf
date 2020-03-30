<style lang="scss" global>
/* Progress Bar */
.progress {
    position: relative;
    height: 2px;
    display: block;
    width: 100%;
    background-color: rgba(0,0,0,0.15);
    border-radius: 2px;
    background-clip: padding-box;
    margin: 0.5rem 0 1rem 0;
    overflow: hidden;
}
.progress .indeterminate {
    background-color: #1C1648;
}

.modal .progress {
    background-color: rgba(255,255,255,0.35);    
}

.modal .progress .indeterminate {
    background-color: white;
}

.progress .indeterminate:before {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.progress .indeterminate:after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    -webkit-animation-delay: 1.15s;
    animation-delay: 1.15s;
}

@keyframes indeterminate {
    0% {
        left: -35%;
        right: 100%;
    }

    60% {
        left: 100%;
        right: -90%;
    }

    100% {
        left: 100%;
        right: -90%;
    }
}

@keyframes indeterminate-short {
    0% {
        left: -200%;
        right: 100%;
    }

    60% {
        left: 107%;
        right: -8%;
    }

    100% {
        left: 107%;
        right: -8%;
    }
}

</style>

<div class="progress">
  <div class="indeterminate"></div>
</div>