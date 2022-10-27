<template>
    <div>
        <ShareSharing v-if="$route.query.uid"/>
        <ShareShared v-else/>
    </div>
</template>