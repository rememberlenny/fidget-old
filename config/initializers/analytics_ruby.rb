Analytics = AnalyticsRuby       # Alias for convenience
Analytics.init({
    secret: 'rrqywcfxcs',          # The write key for atriangle/mapmade
    on_error: Proc.new { |status, msg| print msg }  # Optional error handler
})