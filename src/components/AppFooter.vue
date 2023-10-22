<template>
    <section class="footer-base">
        <footer class="text-center">
            <div class="container p-4 pb-0">
                <section class="d-flex justify-content-center align-items-center footer-actions">
                    <a class="nav-link" href="#">About</a>
                    <a class="nav-link" href="#">Terms</a>
                    <button type="button" class="btn btn-light btn-rounded">Sign up!</button>
                </section>
            </div>
            <div class="text-center p-3">
                © 2023 Copyright:
                <a href="https://github.com/Bbarbosa7">Bbarbosa7</a>
            </div>
        </footer>
    </section>
</template>

<style scoped>
.footer-base {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgb(248, 249, 250);
}

.footer-actions {
    justify-content: space-evenly !important;
}
</style>

<script>
export default {
    name: "AppFooter"
};
</script>